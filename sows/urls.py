from django.urls import path
from .views import SowListView

urlpatterns = [
    path('', SowListView.as_view())
]