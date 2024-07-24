export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/api/verif`); // Appel de l'API
  const data = await response.json();

  if (response.ok) {
    console.log(data.content); // Contenu du fichier
  } else {
    console.error(data.error); // Gestion des erreurs
  }
  return <div>Page</div>;
}
