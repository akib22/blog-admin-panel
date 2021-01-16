import PropTypes from 'prop-types';

export default function StatusPill({ content }) {
  const styles = {
    padding: '5px 10px',
    fontWeight: 'bold',
    borderRadius: '999px',
    color: content === 'active' ? 'rgba(6,95,70)' : 'rgba(153,27,27)',
    background: content === 'active' ? 'rgb(209,250,229)' : 'rgba(254,226,226)',
  };

  return <span style={styles}>{content}</span>;
}

StatusPill.propTypes = {
  content: PropTypes.string.isRequired,
};
