from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
import json
class ChatConsumer(WebsocketConsumer):

    def connect(self):
        user = self.scope['user']
        if not user.is_authenticated:
            return
        
        self.username = user.username
        #join a user to a group with the user username
        async_to_sync(self.channel_layer.group_add)(
            self.username, self.channel_name
        )
        self.accept()

    def disconnect(self, message):
        #Leave a room or group
        async_to_sync(self.channel_layer.group_discard)(
            self.username, self.channel_name
        )
        
    # ---------------------------
    # HANGLE REQUEST
    # ---------------------------
    
    def receive(self, text_data):
        data = json.loads(text_data)
        
        print('receive',json.dumps(data, indent=2))