/*
  # IMA Portfolio Website Schema

  1. New Tables
    - `events`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `image_url` (text)
      - `date` (date)
      - `created_at` (timestamptz)
    
    - `team_members`
      - `id` (uuid, primary key)
      - `name` (text)
      - `position` (text)
      - `bio` (text)
      - `image_url` (text)
      - `order_index` (integer)
      - `created_at` (timestamptz)
    
    - `highlights`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `video_url` (text)
      - `thumbnail_url` (text)
      - `created_at` (timestamptz)
    
    - `timeline_events`
      - `id` (uuid, primary key)
      - `year` (text)
      - `title` (text)
      - `description` (text)
      - `order_index` (integer)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (portfolio is public)
*/

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  image_url text NOT NULL,
  date date DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  position text NOT NULL,
  bio text DEFAULT '',
  image_url text NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS highlights (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  video_url text NOT NULL,
  thumbnail_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS timeline_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  year text NOT NULL,
  title text NOT NULL,
  description text DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE highlights ENABLE ROW LEVEL SECURITY;
ALTER TABLE timeline_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view events"
  ON events FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can view team members"
  ON team_members FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can view highlights"
  ON highlights FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can view timeline events"
  ON timeline_events FOR SELECT
  TO anon
  USING (true);