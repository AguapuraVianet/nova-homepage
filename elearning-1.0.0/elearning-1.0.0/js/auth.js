// js/auth.js
class AuthManager {
    static init() {
        this.setupAjaxHeaders();
        this.checkToken();
    }

    static setupAjaxHeaders() {
        // Configurar jQuery
        $.ajaxSetup({
            beforeSend: function(xhr) {
                const token = AuthManager.getToken();
                if (token) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                }
            }
        });

        // Configurar Fetch API também
        const originalFetch = window.fetch;
        window.fetch = function(...args) {
            const token = AuthManager.getToken();
            if (token && args[1]) {
                args[1].headers = {
                    ...args[1].headers,
                    'Authorization': 'Bearer ' + token
                };
            }
            return originalFetch.apply(this, args);
        };
    }

    static getToken() {
        // Primeiro tenta pegar da URL (redirecionamento)
        const urlParams = new URLSearchParams(window.location.search);
        const urlToken = urlParams.get('token');
        
        if (urlToken) {
            localStorage.setItem('jwtToken', urlToken);
            // Limpar URL para não expor o token
            window.history.replaceState({}, document.title, window.location.pathname);
            return urlToken;
        }

        // Se não tem na URL, pega do localStorage
        return localStorage.getItem('jwtToken');
    }

    static checkToken() {
        const token = this.getToken();
        if (!token) {
            window.location.href = 'login.html';
            return false;
        }
        return true;
    }

    static logout() {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userData');
        localStorage.removeItem('rememberedEmail');
        window.location.href = 'login.html';
    }
}

// Inicializar automaticamente
document.addEventListener('DOMContentLoaded', function() {
    AuthManager.init();
});