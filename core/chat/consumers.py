from channels.generic.websocket import WebsocketConsumer

class ChatConsumer(WebsocketConsumer):

    def connect(self):
        #self.username = "Anonymous"
        user = self.scope['user']
        if not user.is_authenticated:
            return
        self.accept()
        #self.send(text_data="[Welcome %s!]" % self.username)   

    def disconnect(self, message):
        pass