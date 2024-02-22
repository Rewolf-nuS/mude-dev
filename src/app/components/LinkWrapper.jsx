import Link from "next/link";

export default function LinkWrapper(props) {
  return (
    <p>
      <Link href={props.href} className="text-teal-300 hover:underline">
        {props.name}
      </Link>
    </p>
  );
}
