import Link from "next/link";

export default function Nav() {
    return (
        <div className="grid grid-flow-col grid-cols-[1fr_auto] 
                        w-3/4
                        mx-auto items-center">
            <Link href="/" className="flex w-fit font-semibold transition hover:text-gray-500 duration-300">
                alejoseed.com
            </Link>

            <li className="flex flex-row p-4 gap-3">
                <ul>Projects</ul>
                <ul>About</ul>
            </li>
        </div>
    );
}