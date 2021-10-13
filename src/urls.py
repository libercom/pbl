from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + [
    path('', include('frontend.urls')),
    path('api/', include('categories.urls')),
    path('admin/', admin.site.urls),
    re_path(r'^(?:.*)/?', include('frontend.urls')),
]
