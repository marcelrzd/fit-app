from django.urls import path
from .views import UserAPIView, UserDetailAPIView

urlpatterns = [
    path('users/', UserAPIView.as_view(), name='user-list-create'),
    path('users/<int:pk>/', UserDetailAPIView.as_view(), name='user-detail'),
]