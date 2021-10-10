import { useRouter } from "next/router";

export default function AutomaticDoorModel() {
  const router = useRouter();
  const { modelName } = router.query;

  return <h1>Type Selected with id: {modelName}</h1>;
}
