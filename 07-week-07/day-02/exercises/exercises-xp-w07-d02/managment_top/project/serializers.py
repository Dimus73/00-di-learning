from rest_framework import serializers
from .models import Department, Employee, Task, Project

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'
        extra_kwargs = {
            'url':{'view_name':'employee_detail_path'},
            'department':{'view_name':'department_detail_path'},
        }

# class EmployeeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Employee
#         fields = '__all__'

class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
        # fields = ['id', 'name', 'description', 'due_date', 'completed', 'project']
        extra_kwargs ={
            'url':{'view_name':'task_detail_path'}
        }

# class TaskSerializer(serializers.ModelSerializer):
#     # project = serializers.HyperlinkedRelatedField(view_name='project-detail',read_only=True)
#     class Meta:
#         model = Task
#         fields = ['name', 'description', 'due_date', 'completed', 'project']



class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
        # fields = ['name', 'description', 'start_date', 'end_date', 'employ']
        extra_kwargs = {
            'employ':{'view_name':'employee_detail_path'}
        }

# class ProjectSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Project
#         fields = '__all__'
