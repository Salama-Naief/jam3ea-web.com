import apiHandler from "@/lib/utils/apiHandler";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log("searchParams", searchParams);
  const route = searchParams.get("route") || "";

  const response = await apiHandler(route, "GET", undefined, true, true);

  return NextResponse.json(response);
}
