from django.shortcuts            import render, redirect
from django.urls                 import reverse_lazy
from django.contrib.auth.models  import Group
from django.views.generic        import CreateView
from django.contrib.auth.views   import LoginView

from .forms                      import NewCreationUserForm

# Create your views here.


class SignUpView(CreateView):
    form_class = NewCreationUserForm
    success_url = reverse_lazy('homepage_path')
    template_name = 'new_user/ac_sign_up.html'


def homepage(request):
    context={}
    return render(request, 'new_user/homepage.html', context)

class LoginView(LoginView):
    template_name = 'new_user/ac_login.html'
    success_url = reverse_lazy('homepage_path')

    def get(self, request, *args, **kwargs):
        if self.request.user.is_authenticated:
            return redirect('homepage_path')
        return self.render_to_response(self.get_context_data())