// js/auth.js
class AuthManager {
    static init() {
        // Só executa verificações em páginas PROTEGIDAS
        if (this.isProtectedPage()) {
            this.checkLogin();
        }
        
        // Configura headers para todas as requisições AJAX
        this.setupAjaxHeaders();
    }

    static isProtectedPage() {
        // Lista de páginas que REQUEREM login
        const protectedPages = ['dadosagua.html', 'contadorenergia.html', 'dadosenergia.html', 'dadosaguaAdmDocumentos.html', 'contas.html', 'dadosaguaAdmCadastro.html',];
        return protectedPages.some(page => window.location.pathname.includes(page));
    }

    static checkLogin() {
        // Só redireciona se NÃO estiver logado e estiver em página protegida
        if (!this.isLoggedIn()) {
            window.location.href = 'login.html';
            return false;
        }
        return true;
    }

    static isLoggedIn() {
        return !!localStorage.getItem('jwtToken');
    }

    static setupAjaxHeaders() {
        // Configura automaticamente o token em todas as requisições
        $.ajaxSetup({
            beforeSend: function(xhr) {
                const token = localStorage.getItem('jwtToken');
                if (token) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                }
            }
        });
    }

    static logout() {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userData');
        window.location.href = 'login.html';
    }
}

// Inicializa apenas se for uma página protegida
if (AuthManager.isProtectedPage()) {
    document.addEventListener('DOMContentLoaded', function() {
        AuthManager.init();
    });
}