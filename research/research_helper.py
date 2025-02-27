import os
import requests
from bs4 import BeautifulSoup
import json
import markdown
import re

def save_webpage_content(url, save_path):
    """Fetch webpage content and save it to a file"""
    try:
        response = requests.get(url)
        response.raise_for_status()
        
        with open(save_path, 'w', encoding='utf-8') as f:
            f.write(response.text)
        
        return True
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return False

def extract_text_from_html(html_content):
    """Extract text content from HTML"""
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Remove script and style elements
    for script in soup(["script", "style"]):
        script.extract()
    
    # Get text
    text = soup.get_text()
    
    # Break into lines and remove leading and trailing space on each
    lines = (line.strip() for line in text.splitlines())
    # Break multi-headlines into a line each
    chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
    # Remove blank lines
    text = '\n'.join(chunk for chunk in chunks if chunk)
    
    return text

def markdown_to_html(markdown_text):
    """Convert markdown to HTML"""
    return markdown.markdown(markdown_text)

def create_research_note(title, content, save_path):
    """Create a research note with title and content"""
    note = f"# {title}\n\n{content}"
    
    with open(save_path, 'w', encoding='utf-8') as f:
        f.write(note)
    
    return True

def append_to_research_note(content, file_path):
    """Append content to an existing research note"""
    with open(file_path, 'a', encoding='utf-8') as f:
        f.write(f"\n\n{content}")
    
    return True

# Create directories for storing research data
def ensure_directories():
    """Ensure all necessary directories exist"""
    directories = [
        "research/rockset/docs",
        "research/rockset/code",
        "research/lancedb/docs",
        "research/lancedb/code",
        "research/comparison"
    ]
    
    for directory in directories:
        os.makedirs(directory, exist_ok=True)

if __name__ == "__main__":
    ensure_directories()
    print("Research helper initialized. Directories created.")
