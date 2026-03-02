import React, { useDebugValue } from 'react'

function BlogPost() {
  return (
    <article>
        <Header
        title ="Understanding React Components"
            author ="Anbu"
            date="10 Jan 2026"
        
        />

        <Content>
            <paragragh>
                React allows developers to build user interfaces using reusable copoenents.
            </paragragh>
            <paragragh>
                Nesting components helps in organizing code and improving readability.
            </paragragh>
        </Content>

        <Footer/>
    </article>
  );
}

export default BlogPost

function Article({children}){
    return <div style={styles.article}></div>;
}


function Header({title , author, date}){
    return(
        <div styles={styles.header}>
            <h1>{title} </h1>
            <p>
                By {author} | {date}
            </p>
             
        </div>
    );
}

function Content({ children }) {
  return <div style={styles.content}>{children}</div>;
}

function Paragraph({ children }) {
  return <p>{children}</p>;
}

function Footer() {
  return (
    <div style={styles.footer}>
      <p>© 2026 My Blog</p>
    </div>
  );
}

const styles = {
  article: {
    border: "1px solid #c2adad",
    padding: "20px",
    maxWidth: "600px",
    margin: "20px auto",
    borderRadius: "8px",
    fontFamily: "Arial"
  },
  header: {
    marginBottom: "16px"
  },
  content: {
    marginBottom: "16px"
  },
  footer: {
    textAlign: "center",
    fontSize: "14px",
    color: "#777"
  }
};