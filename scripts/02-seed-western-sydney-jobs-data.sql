-- Seed data for Western Sydney Jobs

-- Insert sample employers
INSERT INTO employers (email, password_hash, name, phone) VALUES
('admin@techcorp.com.au', '$2b$10$example_hash_1', 'John Smith', '0412345678'),
('hr@healthplus.com.au', '$2b$10$example_hash_2', 'Sarah Johnson', '0423456789'),
('recruiter@buildsafe.com.au', '$2b$10$example_hash_3', 'Mike Wilson', '0434567890');

-- Insert sample companies
INSERT INTO companies (employer_id, name, description, website, address, suburb, postcode, phone, email) VALUES
(1, 'TechCorp Australia', 'Leading technology solutions provider in Western Sydney', 'https://techcorp.com.au', '123 Business Park Dr', 'Parramatta', '2150', '02 9876 5432', 'info@techcorp.com.au'),
(2, 'HealthPlus Medical', 'Comprehensive healthcare services across Western Sydney', 'https://healthplus.com.au', '456 Medical Centre', 'Blacktown', '2148', '02 9765 4321', 'contact@healthplus.com.au'),
(3, 'BuildSafe Construction', 'Premier construction and building services', 'https://buildsafe.com.au', '789 Industrial Estate', 'Penrith', '2750', '02 9654 3210', 'jobs@buildsafe.com.au');

-- Insert sample jobs
INSERT INTO jobs (company_id, employer_id, title, description, requirements, benefits, salary_min, salary_max, job_type, category, suburb, postcode, experience_level, contact_email, contact_phone, application_url, is_featured) VALUES
(1, 1, 'Senior Software Developer', 'Join our dynamic team developing cutting-edge web applications. Work with React, Node.js, and cloud technologies in a collaborative environment.', '• 5+ years experience in full-stack development\n• Proficiency in React, Node.js, TypeScript\n• Experience with AWS or Azure\n• Strong problem-solving skills', '• Competitive salary package\n• Flexible working arrangements\n• Professional development opportunities\n• Health insurance', 90000, 120000, 'full-time', 'Information Technology', 'Parramatta', '2150', 'senior', 'careers@techcorp.com.au', '02 9876 5432', 'https://techcorp.com.au/careers/senior-developer', true),

(1, 1, 'Frontend Developer', 'Create amazing user experiences with modern web technologies. Perfect opportunity for a mid-level developer to grow their career.', '• 3+ years React/Vue.js experience\n• Strong CSS and JavaScript skills\n• Experience with responsive design\n• Git version control', '• Flexible hours\n• Learning budget\n• Modern office environment\n• Team events', 70000, 85000, 'full-time', 'Information Technology', 'Parramatta', '2150', 'mid', 'careers@techcorp.com.au', '02 9876 5432', 'https://techcorp.com.au/careers/frontend-dev', false),

(2, 2, 'Registered Nurse', 'Provide exceptional patient care in our modern medical facility. Join a supportive team committed to healthcare excellence.', '• Current AHPRA registration\n• Minimum 2 years clinical experience\n• Excellent communication skills\n• Ability to work rotating shifts', '• Above award wages\n• Continuing education support\n• Employee assistance program\n• Parking provided', 75000, 85000, 'full-time', 'Healthcare & Medical', 'Blacktown', '2148', 'mid', 'hr@healthplus.com.au', '02 9765 4321', 'https://healthplus.com.au/careers', true),

(2, 2, 'Medical Receptionist', 'Front desk position in busy medical practice. Great opportunity for someone with customer service experience.', '• Previous reception experience preferred\n• Strong communication skills\n• Computer literacy\n• Medical terminology knowledge advantageous', '• Training provided\n• Friendly work environment\n• Career progression opportunities\n• Staff discounts', 45000, 55000, 'full-time', 'Administration', 'Blacktown', '2148', 'entry', 'hr@healthplus.com.au', '02 9765 4321', NULL, false),

(3, 3, 'Construction Project Manager', 'Lead major construction projects across Western Sydney. Excellent opportunity for an experienced project manager.', '• Tertiary qualification in Construction Management\n• 7+ years project management experience\n• Strong leadership and communication skills\n• Knowledge of Australian building codes', '• Company vehicle\n• Performance bonuses\n• Professional development\n• Comprehensive insurance', 110000, 140000, 'full-time', 'Construction & Trades', 'Penrith', '2750', 'senior', 'careers@buildsafe.com.au', '02 9654 3210', 'https://buildsafe.com.au/careers', true),

(3, 3, 'Apprentice Electrician', 'Start your electrical career with Western Sydney''s leading construction company. Full training and mentorship provided.', '• Currently enrolled in electrical apprenticeship\n• Strong work ethic and willingness to learn\n• Basic hand tools\n• Reliable transport', '• Competitive apprentice wages\n• Tool allowance\n• Mentorship program\n• Job security', 35000, 45000, 'full-time', 'Construction & Trades', 'Penrith', '2750', 'entry', 'apprentice@buildsafe.com.au', '02 9654 3210', NULL, false);

-- Update job expiry dates (30 days from now)
UPDATE jobs SET expires_at = NOW() + INTERVAL '30 days';
