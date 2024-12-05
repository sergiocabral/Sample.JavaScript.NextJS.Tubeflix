import { promises as fs } from 'node:fs'
import * as path from 'node:path'
import * as process from 'node:process'
import { NextResponse } from "next/server.js";

export async function POST() {
  const content = (await fs.readFile(path.join(process.cwd(), 'src', 'data', 'videos.json'))).toString()
  const json = JSON.parse(content)
  return NextResponse.json(json)
}