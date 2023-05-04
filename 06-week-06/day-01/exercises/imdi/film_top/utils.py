menu = [{'title': "Home", 'url_name': 'homepage_path'},
        {'title': "Add film", 'url_name': 'add_film_path'},
        {'title': "Add Director", 'url_name': 'add_director_path'},
        # {'title': "Favorites", 'url_name': 'favorites_path'}
        ]

class DataMixin:
    def get_user_context(self, **kwargs):
        context = kwargs
        context['menu'] = menu 
        return context