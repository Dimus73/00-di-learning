from rest_framework import permissions

class RightForView(permissions.BasePermission):

    def has_permission(self, request, view):
        print('has_permission::  test')
        return True
        # return request.user.is_superuser


class NoRecordNToo(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        print('has_object_permission::  test')
        return False