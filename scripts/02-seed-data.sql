-- Sample data for Western Sydney Jobs
-- Run this after creating tables

-- Insert sample companies
INSERT INTO companies (name, description, website, industry, size, location) VALUES
('TechCorp Australia', 'Leading technology solutions provider in Western Sydney', 'https://techcorp.com.au', 'Technology', '100-500', 'Parramatta, NSW'),
('HealthCare Plus', 'Premier healthcare services across Western Sydney', 'https://healthcareplus.com.au', 'Healthcare', '500-1000', 'Blacktown, NSW'),
('EduFuture', 'Innovative education technology company', 'https://edufuture.com.au', 'Education', '50-100', 'Penrith, NSW'),
('BuildRight Construction', 'Commercial and residential construction', 'https://buildright.com.au', 'Construction', '200-500', 'Liverpool, NSW'),
('RetailMax', 'Multi-location retail chain', 'https://retailmax.com.au', 'Retail', '1000+', 'Campbelltown, NSW');

-- Insert sample jobs
INSERT INTO jobs (company_id, title, description, requirements, benefits, salary_min, salary_max, job_type, category, location, experience_level, featured) VALUES
(1, 'Senior Software Developer', 'Join our dynamic team building cutting-edge web applications...', 'Bachelor''s degree in Computer Science, 5+ years experience with React/Node.js', 'Competitive salary, flexible working, health insurance', 90000, 120000, 'full-time', 'Technology', 'Parramatta, NSW', 'senior', true),
(1, 'Frontend Developer', 'Create amazing user experiences with modern web technologies...', '3+ years experience with React, TypeScript, and modern CSS', 'Great team culture, learning opportunities, remote work options', 70000, 90000, 'full-time', 'Technology', 'Parramatta, NSW', 'mid', false),
(2, 'Registered Nurse', 'Provide exceptional patient care in our modern facility...', 'Current nursing registration, 2+ years experience preferred', 'Excellent benefits, professional development, shift allowances', 65000, 80000, 'full-time', 'Healthcare', 'Blacktown, NSW', 'mid', true),
(3, 'Marketing Coordinator', 'Drive marketing initiatives for our education platform...', 'Marketing degree, social media experience, creative mindset', 'Dynamic startup environment, equity options, flexible hours', 55000, 70000, 'full-time', 'Marketing', 'Penrith, NSW', 'entry', false),
(4, 'Project Manager', 'Lead construction projects from planning to completion...', 'Construction management experience, PMP certification preferred', 'Company vehicle, bonuses, career progression', 85000, 110000, 'full-time', 'Construction', 'Liverpool, NSW', 'senior', false);
