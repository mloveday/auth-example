import jwtDecode from 'jwt-decode';
import { optionalAuthGetServerSideProps } from '../lib/optionalAuthGetServerSideProps';
import Link from 'next/link';

const ServerSideAuth = (props) => {
  return <div>
    <h1>This is a page with AUTH</h1>

    <h2>What is the point?</h2>
    <p>We want to get to the bottom of "How do we know a user is logged in" and demystify such complex terms as "we", "know", "a user" and "is logged in". I'll take it as a given that you know what "How do" means.</p>

    <p>This is to show roughly how our auth flow works, and what we need to do to work out if a user is logged in or
      not, as well as making sure they can't cheese it and make us think they're someone they're not.</p>
    <p>The key things to understand from all of this are:</p>
    <ul>
      <li>There are three "computers" in this process - the user's computer, our server and the ID provider's server.
      </li>
      <li>Our servers only have what the user's browser sends to us in terms of cookies, but our server can also set
        cookies on their browser
      </li>
      <li>There are limitations with how large a user's cookies can be in total</li>
      <li>Storing all the things in cookies is probably not the best in terms of security / privacy</li>
      <li>A user being logged in is basically just a case of us (generally meaning on our server, but also in the user's
        browser) being able to verify they are who they say they are
      </li>
      <li>We don't control the ID provider, so have to try and keep our idea of 'the user is logged in' in lock-step
        with the ID provider's idea of 'the user is logged in'
      </li>
    </ul>

    <h2>Am I logged in now?</h2>
    <p>I know that you <span style={{ fontWeight: 'bold' }}>{props.auth ? `DO` : `DON'T`}</span> have some auth state
      according to the cookie.</p>
    {!props.auth && <p>You probably want to sign in now: <a href='/api/auth/login'>Login</a></p>}
    {props.auth && <p>Does this mean I'm logged in? Let's check what we now know...</p>}

    {props.auth && <p><Link href='/page/flow'><a>Enough talk, let's go!</a></Link></p>}
  </div>
}

export const getServerSideProps = optionalAuthGetServerSideProps;

export default ServerSideAuth;
