"""
URL configuration for managment project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from project.views import DepartmentListAPIView, DepartmentDetailView, DepartmentCreate, DepartmentUpdate, DepartmentDelete
from project.views import EmployeesListAPIView, EmployeeDetailView, EmployeeCreate
from project.views import ProjectsListAPIView, ProjectDetailView, ProjectCreate, ProjectDelete, ProjectUpdate
from project.views import TasksListAPIView, TaskDetailView, TaskCreate, TaskDelete, TaskUpdate


urlpatterns = [
    path ('departments/',               DepartmentListAPIView.as_view(), name = 'departments_path'),
    path ('department/<int:pk>',        DepartmentDetailView.as_view(),  name = 'department_detail_path'),
    path ('department_add/',            DepartmentCreate.as_view(),      name = 'departments_cheate_path'),
    path ('department_del/<int:pk>',    DepartmentDelete.as_view(),      name = 'department_detail_path'),
    path ('department_update/<int:pk>', DepartmentUpdate.as_view(),      name = 'department_update_path'),

    path ('employees/',                 EmployeesListAPIView.as_view(),  name = 'employees_path'),
    path ('employee/<int:pk>',          EmployeeDetailView.as_view(),    name = 'employee_detail_path'),
    path ('employee_add/',              EmployeeCreate.as_view(),        name = 'employee_cheate_path'),

    path ('projects/',                  ProjectsListAPIView.as_view(),   name = 'departments_path'),
    path ('project/<int:pk>',           ProjectDetailView.as_view(),     name = 'department_detail_path'),
    path ('project_add/',               ProjectCreate.as_view(),         name = 'departments_cheate_path'),
    path ('project_del/<int:pk>',       ProjectDelete.as_view(),         name = 'department_detail_path'),
    path ('project_update/<int:pk>',    ProjectUpdate.as_view(),         name = 'department_update_path'),

    path ('tasks/',                     TasksListAPIView.as_view(),      name = 'taskts_path'),
    path ('task/<int:pk>',              TaskDetailView.as_view(),        name = 'task_detail_path'),
    path ('task_add/',                  TaskCreate.as_view(),            name = 'tasks_cheate_path'),
    path ('task_del/<int:pk>',          TaskDelete.as_view(),            name = 'task_detail_path'),
    path ('task_update/<int:pk>',       TaskUpdate.as_view(),            name = 'task_update_path'),

]
