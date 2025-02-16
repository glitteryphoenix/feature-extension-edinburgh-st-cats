--
-- Disable foreign key checks while resetting tables
--
SET foreign_key_checks = 0;

-- Drop existing tables if they exist
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS cats;

SET foreign_key_checks = 1;

--
-- Create `cats` Table
--
CREATE TABLE cats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    image VARCHAR(500),  -- Store image URLs or file paths
    description TEXT,
    colour VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

--
-- Create `comments` Table
-- Supports getting and posting comments for a specific cat via /api/comments/cat/:catid
--
CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cat_id INT NOT NULL,  -- Foreign key to cats table
    comment_text TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cat_id) REFERENCES cats(id) ON DELETE CASCADE
);

--
-- Sample Data for Testing
--
INSERT INTO cats (name, location, image, description, colour)
VALUES 
('Whiskers', 'New York', 'whiskers.jpg', 'A friendly orange tabby.', 'Orange'),
('Shadow', 'San Francisco', 'shadow.jpg', 'A mysterious black cat.', 'Black');

INSERT INTO comments (cat_id, comment_text, author)
VALUES 
(1, 'Such a cute cat!', 'Alice'),
(1, 'I love orange tabbies!', 'Bob'),
(2, 'Black cats are the best!', 'Charlie');



