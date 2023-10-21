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
        
class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username',
            'last_name',
            'first_name',
            'password'
        ]
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        # CLEAN ALL VALUES
        username = validated_data['username'].lower()
        last_name = validated_data['last_name'].lower()
        first_name = validated_data['first_name'].lower()
        password = validated_data['password']
        # CREATE A NEW  USER
        user = User.objects.create(
            username=username,
            last_name=last_name,
            first_name=first_name
        )
        user.set_password(password)
        user.save()
        return user