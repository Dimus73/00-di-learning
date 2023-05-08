from django.shortcuts import render
from .models import Department, Employee, Task, Project
from .serializers import DepartmentSerializer, EmployeeSerializer, TaskSerializer, ProjectSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView, ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView
from rest_framework import mixins


# Create your views here.
#***********************   Department
class DepartmentListAPIView(mixins.CreateModelMixin, ListAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DepartmentDetailView(RetrieveAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DepartmentCreate(CreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DepartmentDelete(DestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DepartmentUpdate(UpdateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

#***********************   Employees
class EmployeesListAPIView(mixins.CreateModelMixin, ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class EmployeeDetailView(RetrieveAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class EmployeeCreate(CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer



#***********************   Project
class ProjectsListAPIView(mixins.CreateModelMixin, ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetailView(RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectCreate(CreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDelete(DestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectUpdate(UpdateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


#***********************   Task
class TasksListAPIView(mixins.CreateModelMixin, ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskDetailView(RetrieveAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskCreate(CreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskDelete(DestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskUpdate(UpdateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
