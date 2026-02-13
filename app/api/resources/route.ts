import { NextResponse } from "next/server";
import { resources } from "@/lib/jobsStore";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  if (type) {
    const filtered = resources.filter(
      (r) => r.type.toLowerCase() === type.toLowerCase()
    );
    return NextResponse.json(filtered);
  }

  return NextResponse.json(resources);
}
