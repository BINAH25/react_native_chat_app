from .models import *
from rest_framework import serializers

class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username',
            'last_name',
            'first_name',
            'thumbnail'
        ]