import Link from "next/link";
import { useRouter } from "next/router";

export default function Cidades() {
  const router = useRouter();
  const cidade = router.query.cidade;

  return cidade;
}
