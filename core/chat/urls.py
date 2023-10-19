from django.urls import path
from . import views

urlpatterns = [
    path("auth/login/", views.SignInView.as_view()),
   
]
