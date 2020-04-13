export const login = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user },
  });

export const signup = (formData) =>
  $.ajax({
    method: "POST",
    url: "/api/user",
    data: formData,
    processData: false,
    contentType: false,
  });

export const logout = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session",
  });
