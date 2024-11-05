from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('body_measurements.urls')),
    path('api/', include('users.urls')),

]
