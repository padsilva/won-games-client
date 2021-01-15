import PropTypes from 'prop-types'
import { useState } from 'react'

import Heading from 'components/Heading'
import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'
import Button from 'components/Button'

import * as S from './styles'
import { Close, FilterList } from '@styled-icons/material-outlined'

const ExploreSidebar = ({ items, initialValues = {}, onFilter }) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (name, value) =>
    setValues((s) => ({ ...s, [name]: value }))

  const handleFilter = () => {
    onFilter(values)
    setIsOpen(false)
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />

      <S.IconWrapper>
        <FilterList
          size={24}
          aria-label="open filters"
          onClick={() => setIsOpen(true)}
        />
        <Close
          size={24}
          aria-label="close filters"
          onClick={() => setIsOpen(false)}
        />
      </S.IconWrapper>

      <S.Content>
        {items.map((item) => (
          <S.Items key={item.name}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>
            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  isChecked={!!values[field.name]}
                  onCheck={(v) => handleChange(field.name, v)}
                />
              ))}
            {item.type === 'radio' &&
              item.fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  name={item.name}
                  label={field.label}
                  labelFor={field.name}
                  value={field.name}
                  defaultChecked={field.name === values[item.name]}
                  onChange={() => handleChange(item.name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth onClick={handleFilter}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

ExploreSidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
      fields: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired
        })
      ).isRequired
    }).isRequired
  ).isRequired,
  initialValues: PropTypes.object,
  onFilter: PropTypes.func.isRequired
}

export default ExploreSidebar
