# tienda/urls.py
from django.urls import path
from . import views

app_name = 'tienda'

urlpatterns = [
    path('', views.product_list, name='product_list'),
    path('category/<int:category_id>/', views.product_list_by_category, name='product_list_by_category'),
    path('product/<int:product_id>/', views.product_detail, name='product_detail'),
]