from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('core.urls')),
    path('admin/', admin.site.urls),
    # path('theAdmin/', include('theAdmin.urls')),
    # path('store/', include('store.urls')),
    # path('api/', include('api.urls')),
    # path('customer/', include('customer.urls')),
]
