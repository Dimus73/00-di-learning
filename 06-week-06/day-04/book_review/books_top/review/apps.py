from django.apps import AppConfig


class ReviewConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'review'

    def ready(self) -> None:
        print ("Это функция READY должна загрузить сигнал")
        import review.signal
