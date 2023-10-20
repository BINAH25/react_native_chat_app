from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from django.contrib.auth import authenticate
from rest_framework.permissions import AllowAny
from .utils import get_all_user_permissions
# Create your views here.


def get_auth_for_user(user):
    return {
        'user':UserLoginSerializer(user).data,
        'permission':get_all_user_permissions(user)
        
    }
    

class SignInView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username,password=password)
        if not user:
            return Response({'message':'Invalid Credential'}, status=401)
        
        user_data = get_auth_for_user(user)
        return Response(user_data, status=200)