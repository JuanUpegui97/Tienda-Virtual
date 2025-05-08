
# tienda/api_urls.py
from django.urls import path
from . import api_views  # Importa las vistas de la API como api_views

urlpatterns = [
    path('categories/', api_views.CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', api_views.CategoryDetail.as_view(), name='category-detail'),
    path('products/', api_views.ProductList.as_view(), name='product-list'),
    path('products/<int:pk>/', api_views.ProductDetail.as_view(), name='product-detail'),
    path('register/', api_views.UserRegistrationView.as_view(), name='user-registration'),
    path('users/', api_views.UserListView.as_view(), name='user-list'),

]