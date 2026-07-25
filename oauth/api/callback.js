export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send("Missing authorization code");
  }

  try {
    const response = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: process.env.OAUTH_CLIENT_ID,
        client_secret: process.env.OAUTH_CLIENT_SECRET,
        code,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(400).send(`OAuth error: ${data.error_description || data.error}`);
    }

    // Return token to Decap CMS via postMessage
    res.send(`
<!DOCTYPE html>
<html><body><script>
  window.opener.postMessage(
    { token: "${data.access_token}", provider: "github" },
    window.location.origin
  );
  window.close();
</script></body></html>
    `);
  } catch (err) {
    res.status(500).send("OAuth failed: " + err.message);
  }
}
