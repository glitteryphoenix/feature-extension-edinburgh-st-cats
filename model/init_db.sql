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
('Whiskers', 'Old Town', 'whiskers.jpg', 'This little brown cat loves hanging out by the park, watching the world go by or maybe just bird watching! According to her collar she is called Whiskers.', 'Brown (tabby)'),
('Creepy', 'Leith', 'creepy.jpg', 'Midnight visitor alert! This black and white cat keeps popping up on the outdoor cctv. Who do you belong to, mysterious little kitty?', 'Black and white (tuxedo)'),
('Toby', 'Stockbridge', 'toby.jpg', 'Met the friendliest fluffball today! This cutie practically demanded cuddles. Clearly a professional in the art of charm!', 'Orange and white'),
('Shadow', 'New Town', 'shadow.jpg', 'Morning coffee with a side of cat spotting ☕🐱 This sleek black cat lives opposite the café and always seems to be watching us. Plotting world domination? Or just hoping for a snack?', 'Black');

INSERT INTO comments (cat_id, comment_text, author)
VALUES 
(1, 'Such a cute cat! I see her on my way home from work', 'Alice'),
(1, 'I love tabbies!', 'Bob'),
(2, 'Black cats are the best!', 'Charlie');



