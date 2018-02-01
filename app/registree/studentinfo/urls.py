from django.urls import path, re_path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    re_path(r'(?P<address>0x[a-fA-F0-9]{40})/$', views.index, name='studentinfo'),
] 