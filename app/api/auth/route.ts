export async function GET() {
  return Response.redirect("http://localhost:8080/api/auth/google/login", 302);
}
