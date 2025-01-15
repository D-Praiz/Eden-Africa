from flask import Flask, request
import os
import requests

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads/'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif'}

# WhatsApp Business API configuration
API_URL = 'https://your-api-url.com/v1/messages'  # Replace with your API URL
ACCESS_TOKEN = 'your_access_token'  # Replace with your access token
WHATSAPP_NUMBER = '+2348077223301'  # Replace with your WhatsApp number

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

@app.route('/')
def upload_form():
    return '''
    <form method="post" enctype="multipart/form-data">
        <input type="file" name="file" multiple>
        <input type="submit" value="Upload">
    </form>
    '''

@app.route('/', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part'
    
    files = request.files.getlist('file')
    media_urls = []

    for file in files:
        if file.filename == '':
            return 'No selected file'
        
        if file and allowed_file(file.filename):
            filename = file.filename
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)
            media_urls.append(file_path)  # Store the local file path

    # Send images via WhatsApp Business API
    for media_url in media_urls:
        with open(media_url, 'rb') as media_file:
            response = requests.post(
                API_URL,
                headers={
                    'Authorization': f'Bearer {ACCESS_TOKEN}',
                    'Content-Type': 'application/json'
                },
                json={
                    'messaging_product': 'whatsapp',
                    'to': WHATSAPP_NUMBER,
                    'type': 'image',
                    'image': {
                        'link': f'https://yourdomain.com/{media_url}'  # Update with your domain
                    }
                }
            )
            if response.status_code == 200:
                print(f'Message sent successfully: {response.json()}')
            else:
                print(f'Failed to send message: {response.status_code}, {response.text}')

    return 'Files uploaded and sent via WhatsApp!'

if __name__ == '__main__':
    if not os.path.exists(app.config['UPLOAD_FOLDER']):
        os.makedirs(app.config['UPLOAD_FOLDER'])
    app.run(debug=True)