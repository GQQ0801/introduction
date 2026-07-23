// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    setupMobileMenu();
    
    // 图片画廊过滤
    setupGalleryFilters();
    
    // 生活页面分类过滤
    setupLifeCategories();
    
    // 灯箱效果（如果在摄影页面）
    setupLightbox();
    
    // 添加滚动动画
    setupScrollAnimations();
});

/**
 * 设置移动端菜单
 */
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // 点击菜单项后关闭菜单
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
}

/**
 * 设置图片画廊过滤功能
 */
function setupGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的active类
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // 添加当前按钮的active类
                this.classList.add('active');
                
                // 获取过滤类别
                const filterValue = this.getAttribute('data-filter');
                
                // 过滤图片
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
}

/**
 * 设置生活页面分类过滤
 */
function setupLifeCategories() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const postCards = document.querySelectorAll('.post-card');
    
    if (categoryButtons.length > 0 && postCards.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的active类
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // 添加当前按钮的active类
                this.classList.add('active');
                
                // 获取分类
                const category = this.getAttribute('data-category');
                
                // 过滤文章
                postCards.forEach(card => {
                    if (category === 'all' || card.classList.contains(category)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}

/**
 * 设置灯箱效果
 */
function setupLightbox() {
    // 如果在摄影页面且存在lightGallery库
    const photoGallery = document.getElementById('photo-gallery');
    
    if (photoGallery && typeof lightGallery === 'function') {
        lightGallery(photoGallery, {
            selector: '.gallery-item',
            download: false,
            counter: false
        });
    }
    
    // 添加视频播放点击事件
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');
    videoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            // 这里实际项目中会替换为真实的视频播放逻辑
            alert('视频播放功能将在实际项目中实现');
        });
    });
}

/**
 * 设置滚动动画
 */
function setupScrollAnimations() {
    // 添加滚动显示动画
    const animatedElements = document.querySelectorAll('.project-card, .gallery-item, .post-card, .video-card, .skill-category, .timeline-item, .award-item');
    
    if (animatedElements.length > 0) {
        // 简单的元素出现动画
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(element => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
    
    // 项目卡片悬停效果增强
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.4)';
        });
    });
}

/**
 * 在滚动时添加导航栏动画效果
 */
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 25, 0.98)';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 15, 25, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}); 

document.addEventListener('DOMContentLoaded', () => {
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(item => {
        const video = item.querySelector('video');
        const caption = item.querySelector('.video-caption');

        item.addEventListener('mouseenter', () => {
            video.setAttribute('controls', 'true');
            // 如果你想让控制条和文字不重叠，可以在这里给 caption 加个 padding-bottom
            caption.style.paddingBottom = "45px"; 
        });

        item.addEventListener('mouseleave', () => {
            video.removeAttribute('controls');
            caption.style.paddingBottom = "10px";
        });
    });
});
