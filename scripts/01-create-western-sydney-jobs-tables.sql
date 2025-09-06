-- Western Sydney Jobs Database Schema
-- Drop existing tables if they exist
DROP TABLE IF EXISTS job_applications CASCADE;
DROP TABLE IF EXISTS jobs CASCADE;
DROP TABLE IF EXISTS companies CASCADE;
DROP TABLE IF EXISTS employers CASCADE;

-- Create employers table (only employers can login)
CREATE TABLE employers (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT true
);

-- Create companies table
CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    employer_id INTEGER REFERENCES employers(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    website VARCHAR(255),
    logo_url VARCHAR(500),
    address TEXT,
    suburb VARCHAR(100),
    postcode VARCHAR(10),
    phone VARCHAR(50),
    email VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create jobs table
CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    company_id INTEGER REFERENCES companies(id) ON DELETE CASCADE,
    employer_id INTEGER REFERENCES employers(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    requirements TEXT,
    benefits TEXT,
    salary_min INTEGER,
    salary_max INTEGER,
    salary_type VARCHAR(20) DEFAULT 'annual', -- annual, hourly, daily
    job_type VARCHAR(50) NOT NULL, -- full-time, part-time, contract, casual
    category VARCHAR(100) NOT NULL,
    suburb VARCHAR(100) NOT NULL,
    postcode VARCHAR(10),
    experience_level VARCHAR(50), -- entry, mid, senior, executive
    contact_email VARCHAR(255) NOT NULL,
    contact_phone VARCHAR(50),
    application_url VARCHAR(500),
    is_featured BOOLEAN DEFAULT false,
    is_filled BOOLEAN DEFAULT false,
    expires_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    views_count INTEGER DEFAULT 0
);

-- Create indexes for better performance
CREATE INDEX idx_jobs_category ON jobs(category);
CREATE INDEX idx_jobs_suburb ON jobs(suburb);
CREATE INDEX idx_jobs_job_type ON jobs(job_type);
CREATE INDEX idx_jobs_is_featured ON jobs(is_featured);
CREATE INDEX idx_jobs_is_filled ON jobs(is_filled);
CREATE INDEX idx_jobs_created_at ON jobs(created_at);
CREATE INDEX idx_jobs_expires_at ON jobs(expires_at);

-- Create full-text search index
CREATE INDEX idx_jobs_search ON jobs USING gin(to_tsvector('english', title || ' ' || description));
