import { promises as fs } from 'node:fs'
import * as path from 'node:path'
import * as process from 'node:process'
import { NextResponse } from "next/server.js";
import { objectToArray } from '@/helpers/helpers.js';

export async function POST(request, { params }) {
  const { youtubeId } = await params
  const content = (await fs.readFile(path.join(process.cwd(), 'src', 'data', 'videos.json'))).toString()
  const videos = objectToArray(JSON.parse(content))
  const video = videos.find(video => video.key === youtubeId)
  return NextResponse.json(video ?? null, { status: video ? 200 : 404 })
}