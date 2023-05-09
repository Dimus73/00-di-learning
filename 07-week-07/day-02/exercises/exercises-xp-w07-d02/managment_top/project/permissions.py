from rest_framework import permissions

class RightForView(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user.is_superuser


class IsBen(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if obj.title.lower() == 'test3' and request.user.username == 'ben':
            return False
        return True