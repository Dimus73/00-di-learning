from django.apps import AppConfig


class ProjectConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'project'

    def ready(self) -> None:
        print ("Это функция READY должна загрузить сигнал")
        import project.signal1
