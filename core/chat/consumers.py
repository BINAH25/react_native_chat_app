import logging
from channels.generic.websocket import WebsocketConsumer
from django.contrib.auth.models import AnonymousUser

logger = logging.getLogger(__name__)

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        user = self.scope.get('user', AnonymousUser())
        print(user)
        logger.info(f"WebSocket connection established for user: {user}")

        if not user.is_authenticated:
            logger.warning("User is not authenticated. Closing connection.")
            self.close()
            return

        logger.info("User is authenticated. Accepting connection.")
        self.accept()

    def disconnect(self, close_code):
        user = self.scope.get('user', AnonymousUser())
        logger.info(f"WebSocket connection closed for user: {user}")

    
