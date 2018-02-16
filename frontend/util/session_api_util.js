export const login = (user) => (
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: {
      user: user
    }
  })
);

export const logout = () => (
  $.ajax({
    method: "DELETE",
    url: "/api/session"
  })
);

export const signup = (user) => (
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: {
      user: user
    }
  })
);

export const changePassword = (password) => (
  $.ajax({
    url: "/api/users/" + password.currentUser.id,
    type: "PATCH",
    dataType: "json",
    data: {
      user: {
        username: password.currentUser.username,
        current_password: password.currentPassword,
        new_password: password.newPassword,
        new_password_confirm: password.newPasswordConfirm
      }
    }
  })
);
